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


// Description of Mimosa equisetum
const Mimosa_equisetum = new Mimosa()
Mimosa_equisetum.specificEpithet = 'equisetum'

Mimosa_equisetum.stems = new Stems()

Mimosa_equisetum.stipule = new Stipule()
Mimosa_equisetum.stipule.margin = new MarginStipule()
Mimosa_equisetum.stipule.adaxial = new AdaxialStipule()
Mimosa_equisetum.stipule.abaxial = new AbaxialStipule()

Mimosa_equisetum.leaf = new Leaf()
Mimosa_equisetum.leaf.petiole = new Petiole()
Mimosa_equisetum.leaf.bipinnate = new Bipinnate()
Mimosa_equisetum.leaf.bipinnate.rachis = new Rachis()
Mimosa_equisetum.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_equisetum.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_equisetum.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_equisetum.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_equisetum.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_equisetum.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_equisetum.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 32)
Mimosa_equisetum.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_equisetum.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_equisetum.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_equisetum.inflorescence = new Inflorescence()
Mimosa_equisetum.inflorescence.peduncle = new Peduncle()
Mimosa_equisetum.inflorescence.capitate = new CapitateInflorescence()

Mimosa_equisetum.flower = new Flower()
Mimosa_equisetum.flower.bracteole = new Bracteole()
Mimosa_equisetum.flower.merism = ['4-merous', '5-merous']
Mimosa_equisetum.flower.calyx = new Calyx()
Mimosa_equisetum.flower.corolla = new Corolla()

Mimosa_equisetum.androecium = new Androecium()
Mimosa_equisetum.androecium.filaments = new Filaments()
Mimosa_equisetum.androecium.filaments.colour = 'pinkish'

Mimosa_equisetum.ginoecium = new Ginoecium()
Mimosa_equisetum.ginoecium.ovary = new Ovary()

Mimosa_equisetum.fruit = new Fruit()
Mimosa_equisetum.fruit.stipe = new Stipe()
Mimosa_equisetum.fruit.replum = new Replum()
Mimosa_equisetum.fruit.epicarp = new Epicarp()

Mimosa_equisetum.seed = new Seed()


// Description authorship
Mimosa_equisetum.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_equisetum.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa equisetum
export { Mimosa_equisetum }