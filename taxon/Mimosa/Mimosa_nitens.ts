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


// Description of Mimosa nitens
const Mimosa_nitens = new Mimosa()
Mimosa_nitens.specificEpithet = 'nitens'

Mimosa_nitens.stems = new Stems()

Mimosa_nitens.stipule = new Stipule()
Mimosa_nitens.stipule.margin = new MarginStipule()
Mimosa_nitens.stipule.adaxial = new AdaxialStipule()
Mimosa_nitens.stipule.abaxial = new AbaxialStipule()

Mimosa_nitens.leaf = new Leaf()
Mimosa_nitens.leaf.petiole = new Petiole()
Mimosa_nitens.leaf.bipinnate = new Bipinnate()
Mimosa_nitens.leaf.bipinnate.rachis = new Rachis()
Mimosa_nitens.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_nitens.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_nitens.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(2)
Mimosa_nitens.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 7)
Mimosa_nitens.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(8)
Mimosa_nitens.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_nitens.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_nitens.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_nitens.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 16)
Mimosa_nitens.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_nitens.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_nitens.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_nitens.inflorescence = new Inflorescence()
Mimosa_nitens.inflorescence.peduncle = new Peduncle()
Mimosa_nitens.inflorescence.capitate = new CapitateInflorescence()

Mimosa_nitens.flower = new Flower()
Mimosa_nitens.flower.bracteole = new Bracteole()
Mimosa_nitens.flower.merism = '4-merous'
Mimosa_nitens.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_nitens.flower.calyx = new Calyx()
Mimosa_nitens.flower.corolla = new Corolla()
Mimosa_nitens.flower.corolla.shape = 'funnelform'

Mimosa_nitens.androecium = new Androecium()
Mimosa_nitens.androecium.filaments = new Filaments()
Mimosa_nitens.androecium.filaments.colour = 'pinkish'

Mimosa_nitens.ginoecium = new Ginoecium()
Mimosa_nitens.ginoecium.ovary = new Ovary()

Mimosa_nitens.fruit = new Fruit()
Mimosa_nitens.fruit.stipe = new Stipe()
Mimosa_nitens.fruit.replum = new Replum()
Mimosa_nitens.fruit.epicarp = new Epicarp()

Mimosa_nitens.seed = new Seed()


// Description authorship
Mimosa_nitens.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_nitens.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa nitens
export { Mimosa_nitens }