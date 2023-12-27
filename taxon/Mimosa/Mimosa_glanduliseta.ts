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


// Description of Mimosa glanduliseta
const Mimosa_glanduliseta = new Mimosa()
Mimosa_glanduliseta.specificEpithet = 'glanduliseta'

Mimosa_glanduliseta.stems = new Stems()

Mimosa_glanduliseta.stipule = new Stipule()
Mimosa_glanduliseta.stipule.margin = new MarginStipule()
Mimosa_glanduliseta.stipule.adaxial = new AdaxialStipule()
Mimosa_glanduliseta.stipule.abaxial = new AbaxialStipule()

Mimosa_glanduliseta.leaf = new Leaf()
Mimosa_glanduliseta.leaf.petiole = new Petiole()
Mimosa_glanduliseta.leaf.bipinnate = new Bipinnate()
Mimosa_glanduliseta.leaf.bipinnate.rachis = new Rachis()
Mimosa_glanduliseta.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_glanduliseta.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_glanduliseta.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 6)
Mimosa_glanduliseta.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(7)
Mimosa_glanduliseta.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_glanduliseta.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_glanduliseta.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_glanduliseta.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(4)
Mimosa_glanduliseta.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 9)
Mimosa_glanduliseta.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_glanduliseta.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_glanduliseta.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_glanduliseta.inflorescence = new Inflorescence()
Mimosa_glanduliseta.inflorescence.peduncle = new Peduncle()
Mimosa_glanduliseta.inflorescence.capitate = new CapitateInflorescence()

Mimosa_glanduliseta.flower = new Flower()
Mimosa_glanduliseta.flower.bracteole = new Bracteole()
Mimosa_glanduliseta.flower.merism = '4-merous'
Mimosa_glanduliseta.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_glanduliseta.flower.calyx = new Calyx()
Mimosa_glanduliseta.flower.calyx.shape = 'campanulate'
Mimosa_glanduliseta.flower.corolla = new Corolla()
Mimosa_glanduliseta.flower.corolla.shape = 'funnelform'

Mimosa_glanduliseta.androecium = new Androecium()
Mimosa_glanduliseta.androecium.filaments = new Filaments()
Mimosa_glanduliseta.androecium.filaments.colour = 'pinkish'

Mimosa_glanduliseta.ginoecium = new Ginoecium()
Mimosa_glanduliseta.ginoecium.ovary = new Ovary()

Mimosa_glanduliseta.fruit = new Fruit()
Mimosa_glanduliseta.fruit.stipe = new Stipe()
Mimosa_glanduliseta.fruit.replum = new Replum()
Mimosa_glanduliseta.fruit.epicarp = new Epicarp()

Mimosa_glanduliseta.seed = new Seed()


// Description authorship
Mimosa_glanduliseta.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_glanduliseta.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa glanduliseta
export { Mimosa_glanduliseta }