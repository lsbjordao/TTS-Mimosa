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


// Description of Mimosa diffusa
const Mimosa_diffusa = new Mimosa()
Mimosa_diffusa.specificEpithet = 'diffusa'

Mimosa_diffusa.stems = new Stems()

Mimosa_diffusa.stipule = new Stipule()
Mimosa_diffusa.stipule.margin = new MarginStipule()
Mimosa_diffusa.stipule.adaxial = new AdaxialStipule()
Mimosa_diffusa.stipule.abaxial = new AbaxialStipule()

Mimosa_diffusa.leaf = new Leaf()
Mimosa_diffusa.leaf.petiole = new Petiole()
Mimosa_diffusa.leaf.bipinnate = new Bipinnate()
Mimosa_diffusa.leaf.bipinnate.rachis = new Rachis()
Mimosa_diffusa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_diffusa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_diffusa.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_diffusa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_diffusa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_diffusa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_diffusa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(35, 47)
Mimosa_diffusa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_diffusa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_diffusa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_diffusa.inflorescence = new Inflorescence()
Mimosa_diffusa.inflorescence.peduncle = new Peduncle()
Mimosa_diffusa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_diffusa.flower = new Flower()
Mimosa_diffusa.flower.bracteole = new Bracteole()
Mimosa_diffusa.flower.merism = '4-merous'
Mimosa_diffusa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_diffusa.flower.calyx = new Calyx()
Mimosa_diffusa.flower.calyx.shape = 'campanulate'
Mimosa_diffusa.flower.corolla = new Corolla()
Mimosa_diffusa.flower.corolla.shape = 'funnelform'

Mimosa_diffusa.androecium = new Androecium()
Mimosa_diffusa.androecium.filaments = new Filaments()

Mimosa_diffusa.ginoecium = new Ginoecium()
Mimosa_diffusa.ginoecium.ovary = new Ovary()

Mimosa_diffusa.fruit = new Fruit()
Mimosa_diffusa.fruit.stipe = new Stipe()
Mimosa_diffusa.fruit.replum = new Replum()
Mimosa_diffusa.fruit.epicarp = new Epicarp()

Mimosa_diffusa.seed = new Seed()


// Description authorship
Mimosa_diffusa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_diffusa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa diffusa
export { Mimosa_diffusa }