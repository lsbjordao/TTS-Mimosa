// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa reduviosa
const Mimosa_reduviosa = new Mimosa()
Mimosa_reduviosa.specificEpithet = 'reduviosa'

Mimosa_reduviosa.stems = new Stems()

Mimosa_reduviosa.stipule = new Stipule()
Mimosa_reduviosa.stipule.margin = new MarginStipule()
Mimosa_reduviosa.stipule.adaxial = new AdaxialStipule()
Mimosa_reduviosa.stipule.abaxial = new AbaxialStipule()

Mimosa_reduviosa.leaf = new Leaf()
Mimosa_reduviosa.leaf.petiole = new Petiole()
Mimosa_reduviosa.leaf.bipinnate = new Bipinnate()
Mimosa_reduviosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_reduviosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_reduviosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_reduviosa.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_reduviosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_reduviosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_reduviosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_reduviosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 15)
Mimosa_reduviosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_reduviosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_reduviosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_reduviosa.inflorescence = new Inflorescence()
Mimosa_reduviosa.inflorescence.peduncle = new Peduncle()
Mimosa_reduviosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_reduviosa.flower = new Flower()
Mimosa_reduviosa.flower.bracteole = new Bracteole()
Mimosa_reduviosa.flower.merism = '4-merous'
Mimosa_reduviosa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_reduviosa.flower.calyx = new Calyx()
Mimosa_reduviosa.flower.calyx.shape = 'pappiform'
Mimosa_reduviosa.flower.corolla = new Corolla()
Mimosa_reduviosa.flower.corolla.shape = 'funnelform'

Mimosa_reduviosa.androecium = new Androecium()
Mimosa_reduviosa.androecium.filaments = new Filaments()
Mimosa_reduviosa.androecium.filaments.colour = 'pinkish'

Mimosa_reduviosa.ginoecium = new Ginoecium()
Mimosa_reduviosa.ginoecium.ovary = new Ovary()

Mimosa_reduviosa.fruit = new Fruit()
Mimosa_reduviosa.fruit.stipe = new Stipe()
Mimosa_reduviosa.fruit.replum = new Replum()
Mimosa_reduviosa.fruit.epicarp = new Epicarp()

Mimosa_reduviosa.seed = new Seed()


// Description authorship
Mimosa_reduviosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_reduviosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa reduviosa
export { Mimosa_reduviosa }